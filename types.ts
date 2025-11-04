
import React from 'react';

export interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface BlogPost {
  imageUrl: string;
  category: string;
  title: string;
  excerpt: string;
}
