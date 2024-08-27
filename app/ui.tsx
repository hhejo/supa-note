'use client';

import Header from '@/components/header';
import NewNote from '@/components/new-note';
import Sidebar from '@/components/sidebar';

const notes = [
  { id: 1, title: '노트 1', content: '노트 내용입니다 1' },
  { id: 2, title: '노트 2', content: '노트 내용입니다 2' },
];

export default function UI() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <Sidebar notes={notes} />
        {/* New Note */}
        <NewNote />
        {/* Note Viewer (Edit or View) */}
        {/* Empty Note */}
      </div>
    </main>
  );
}
