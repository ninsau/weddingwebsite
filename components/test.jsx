import ReactCanvasConfetti from "react-canvas-confetti";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import Link from "next/link";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

export function Hero() {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();
  const [show, setShow] = useState(true);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const confetti = useCallback(() => {
    startAnimation();

    setTimeout(() => {
      stopAnimation();
    }, 10000);
  }, []);

  return (
    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/couple.JPG"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block text-base text-center text-white font-semibold tracking-wide uppercase">
            20-08-2022
          </span>
          Charles and Christabel
        </h1>
        <p className="mt-3 text-xl text-white">
          We joyfully request the pleasure of your company as we speak our vows
          and join in marriage in the presence of family and friends.
        </p>
        <Link href="/event">
          <span className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
            Event Details
          </span>
        </Link>
      </div>
    </div>
  );
}
