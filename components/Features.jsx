"use client";

import { motion } from "framer-motion";
import { Database, Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Real-time Sync",
    description: "Sub-millisecond latency for your most critical data pipelines.",
    icon: Zap,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption at rest and in transit.",
    icon: Shield,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Advanced Analytics",
    description: "Built-in predictive models and custom reporting.",
    icon: BarChart3,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Universal Connectors",
    description: "Integrate with any database in one click.",
    icon: Database,
    className: "md:col-span-2 md:row-span-1",
  }
];

export default function Features() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Everything you need.<br />
            <span className="text-[var(--pro)]">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-8 flex flex-col group hover:bg-white/[0.04] transition-colors ${feature.className}`}
            >
              <feature.icon className="w-8 h-8 text-[var(--pro)] mb-auto group-hover:text-[var(--glow)] transition-colors" />
              <div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-[var(--pro)] font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
