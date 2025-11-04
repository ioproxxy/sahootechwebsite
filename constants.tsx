
import React from 'react';
import type { Service, BlogPost } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Insights', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const ServiceIcon: React.FC<{ iconClass: string }> = ({ iconClass }) => (
    <div className="mb-4 inline-block rounded-full bg-accent p-4 text-primary">
        <i className={`fas ${iconClass} fa-2x w-8 h-8`}></i>
    </div>
);


export const SERVICES_DATA: Service[] = [
  {
    icon: <ServiceIcon iconClass="fa-brain" />,
    title: 'AI & Machine Learning',
    description: 'Leverage predictive analytics and intelligent automation to unlock new opportunities and drive business growth.',
  },
  {
    icon: <ServiceIcon iconClass="fa-shield-halved" />,
    title: 'Cybersecurity Solutions',
    description: 'Protect your digital assets with our robust security services, including threat detection, risk management, and data protection.',
  },
  {
    icon: <ServiceIcon iconClass="fa-cogs" />,
    title: 'IT Consultancy',
    description: 'Navigate your digital transformation with expert guidance on strategy, architecture, and implementation.',
  },
  {
    icon: <ServiceIcon iconClass="fa-network-wired" />,
    title: 'IT Support & Infrastructure',
    description: 'Reliable IT support, network management, and infrastructure solutions to ensure your operations run smoothly.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
    {
        imageUrl: 'https://picsum.photos/seed/tech1/600/400',
        category: 'AI/ML',
        title: 'The Future of Business with Generative AI',
        excerpt: 'Discover how generative AI is reshaping industries and what it means for your business strategy.'
    },
    {
        imageUrl: 'https://picsum.photos/seed/cyber1/600/400',
        category: 'Cybersecurity',
        title: 'Top 5 Cybersecurity Threats to Watch in 2024',
        excerpt: 'Stay ahead of cybercriminals by understanding the most prevalent threats to businesses today.'
    },
    {
        imageUrl: 'https://picsum.photos/seed/cloud1/600/400',
        category: 'Digital Transformation',
        title: 'Migrating to the Cloud: A Strategic Guide',
        excerpt: 'A step-by-step guide for businesses looking to make a seamless transition to cloud infrastructure.'
    }
];
