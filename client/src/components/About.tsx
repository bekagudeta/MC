export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#001722]">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-[#084A48] to-[#6BCFCB] rounded-full flex items-center justify-center">
                <span className="text-6xl text-white font-bold">MC</span>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I am a passionate software developer and data scientist with expertise in building 
                innovative solutions that bridge the gap between technology and real-world problems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a strong foundation in computer science and extensive experience in research, 
                I specialize in developing scalable applications, implementing machine learning models, 
                and conducting cutting-edge research in artificial intelligence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#001722]/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#001722] mb-2">Focus Areas</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Software Development</li>
                    <li>• Data Science</li>
                    <li>• Machine Learning</li>
                    <li>• Research</li>
                  </ul>
                </div>
                <div className="bg-[#001722]/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#001722] mb-2">Technologies</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• JavaScript/TypeScript</li>
                    <li>• Python</li>
                    <li>• React/Node.js</li>
                    <li>• TensorFlow/PyTorch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
