'use client';

import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white mb-6 cursor-pointer transition"
    >
      <BiArrowBack />
      Back
    </button>
  );
}
