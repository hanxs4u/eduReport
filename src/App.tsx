export function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-6">
      <div className="max-w-lg w-full rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          React + Vite + TypeScript + Tailwind CSS
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          EduReport
        </h1>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          프로젝트 기본 개발 환경 세팅이 완료되었습니다.{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono text-slate-800">
            src/App.tsx
          </code>
          에서 작업을 시작할 수 있습니다.
        </p>
      </div>
    </main>
  )
}

export default App
