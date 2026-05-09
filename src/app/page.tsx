import tools from '../../data/tools.json'
// 支持后台 JSON 批量导入 AI 工具数据
// 数据格式示例：
// [
//   {
//     "name": "文心大模型",
//     "url": "https://cloud.baidu.com/product/wenxinworkshop.html",
//     "category": "AI模型训练/部署",
//     "desc": "百度文心系列 AI 大模型平台",
//     "icon": "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.0/svg/solid-brain.svg"
//   }
// ]
//
// 后续后台接口：
// POST /api/admin/import-tools
// Content-Type: application/json

export default function AIHubHomepage() {


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur sticky top-0 z-50 bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-lg">
              AI
            </div>

            <div>
              <h1 className="text-xl font-bold">OneKimi</h1>
              <p className="text-xs text-gray-400">
                www.onekimi.cn
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#tools" className="hover:text-white transition">
              AI工具
            </a>

            <a href="#news" className="hover:text-white transition">
              AI前沿
            </a>

            <a href="#projects" className="hover:text-white transition">
              实践分享
            </a>

            <a href="#submit" className="hover:text-white transition">
              提交收录
            </a>
          </nav>

          <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition">
            登录
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>

              <span className="text-sm text-gray-300">
                持续更新全球 AI 工具与行业动态
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              发现最新

              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                {' '}AI 工具
              </span>

              与真实项目案例
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-8 mb-10 max-w-3xl mx-auto">
              聚合 AI 工具、AI 行业前沿资讯与真实 AI 实践案例，帮助创作者、开发者与企业快速掌握 AI 生产力。
            </p>

            {/* Search */}
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 bg-white/5 border border-white/10 p-3 rounded-3xl backdrop-blur">
              <input
                className="flex-1 bg-transparent px-4 py-4 outline-none text-lg"
                placeholder="搜索 AI 工具 / AI 新闻 / AI 项目"
              />

              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                搜索
              </button>
            </div>

            {/* CTA */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                提交 AI 工具
              </button>

              <button className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                查看热门工具
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-3">
              热门 AI 工具
            </h2>

            <p className="text-gray-400">
              收录国内外主流 AI 产品与创作工具
            </p>
          </div>

          <button className="border border-white/10 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
            查看全部
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group border border-white/10 bg-white/5 rounded-3xl p-6 hover:bg-white/10 transition hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 mb-5"></div>

              <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-xs mb-4 text-gray-300">
               {tool.category}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {tool.name}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {tool.desc}
              </p>

<a
  href={tool.url}
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition text-center"
>
  访问工具
</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}