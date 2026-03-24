"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 60;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Notice the format from public/ directory
      // format: frame_00_delay-0.066s.png
      const frameNumber = i.toString().padStart(2, "0");
      img.src = `/frame_${frameNumber}_delay-0.066s.png`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      
      loadedImages.push(img);
    }
  }, []);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0-1) to frame index (0-59)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current || !images.length) return;
    
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const currentFrame = Math.floor(latest);
    const img = images[currentFrame];
    
    if (img) {
      // Logic for object-fit: cover on canvas
      const canvas = canvasRef.current;
      const { width, height } = canvas;
      const imgRatio = img.width / img.height;
      const canvasRatio = width / height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = width;
        drawHeight = width / imgRatio;
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawWidth = height * imgRatio;
        drawHeight = height;
        offsetX = (width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger a redraw of current frame
        frameIndex.set(frameIndex.get() + 0.0001); 
      }
    };

    handleResize(); // Initial set
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);


  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
        {/* We can overlay dark gradient if needed to make text pop */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>
    </div>
  );
}
