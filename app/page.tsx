'use client';
import { useState } from 'react';
import { CANVAS_LIST } from './components/canvas';
import Controls from './components/controls';
import { Toaster } from 'sonner';

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const resetCanvas = () => {
    setPreview(null);
    setTheme('light');
  };

  return (
    <>
      <Toaster />
      <div className={`${theme}`}>
        <div>{preview ? preview : null}</div>
        <div className="overflow-hidden absolute top-0 left-0">
          <div className="grid grid-cols-1 gap-y-6 px-4 pb-20 pt-10 md:px-10 border">
            {CANVAS_LIST.map((canvas, i) => {
              return (
                <Controls
                  key={i}
                  setPreview={setPreview}
                  theme={canvas.theme}
                  setTheme={setTheme}
                >
                  {canvas.component}
                </Controls>
              );
            })}
            <div
              onClick={resetCanvas}
              className="rounded-md w-full text-center bg-zinc-900 px-2 py-1 text-xs font-medium text-white cursor-pointer"
            >
              Reset Canvas
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
