export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-bold mb-6">
          OneKimi AI 导航平台
        </h1>

        <p className="text-xl text-gray-400 mb-12">
          发现 AI 工具 · AI 前沿 · AI 实践分享
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              AI 工具
            </h2>
            <p className="text-gray-400">
              收录国内外主流 AI 工具与平台
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              AI 前沿
            </h2>
            <p className="text-gray-400">
              分享最新 AI 行业资讯与趋势
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              实践分享
            </h2>
            <p className="text-gray-400">
              分享 AI 从业者真实项目案例
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}