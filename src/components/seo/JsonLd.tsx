import React from 'react';
import { serializeJsonLd } from '@/lib/serializeJsonLd';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script type="application/ld+json">{serializeJsonLd(data)}</script>
  );
};
