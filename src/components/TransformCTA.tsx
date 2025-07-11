"use client";

import Link from "next/link";

export interface TransformCTAProps {
  className?: string;
}

export function TransformCTA({ className = "" }: TransformCTAProps) {
  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Ready to Transform Your Removals Business?</h2>
          <p className="text-gray-600 mt-2">
            Take the first step towards improved efficiency, technology modernization, and strategic growth.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link href="/contact" className="btn-primary">
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}
