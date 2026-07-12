import type { Metadata } from 'next';
import { HomeLabContent } from '@/components/homelab/HomeLabContent';

export const metadata: Metadata = {
  title: 'Home Lab — Self-Hosted Infrastructure',
  description:
    'Case study of a production-style homelab on Proxmox: segmented VMs, a Cloudflare-Tunnel + Traefik edge, containerized services, defense-in-depth security, full monitoring and a 3-2-1 backup strategy.',
};

export default function HomeLabPage() {
  return <HomeLabContent />;
}
