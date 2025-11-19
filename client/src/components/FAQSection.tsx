import FAQItem from "./FAQItem";

export default function FAQSection() {
  const faqs = [
    {
      question: "Como faço para me inscrever em um curso?",
      answer:
        "Inscrever-se em um curso é simples! Navegue até a seção de cursos, escolha o curso desejado e clique no botão 'Enroll Now'. Você será direcionado para completar o processo de inscrição e pagamento. Após a confirmação, você terá acesso imediato ao conteúdo do curso.",
    },
    {
      question: "Qual é o período de acesso ao curso após a inscrição?",
      answer:
        "Você tem acesso vitalício ao curso após a inscrição. Isso significa que pode assistir às aulas quantas vezes quiser, a qualquer momento. Você também receberá atualizações gratuitas de conteúdo e terá acesso a todos os materiais complementares.",
    },
    {
      question: "Vocês oferecem certificados após a conclusão?",
      answer:
        "Sim! Após completar todos os módulos e passar na avaliação final, você receberá um certificado digital verificável. Este certificado pode ser compartilhado em seu LinkedIn e outros perfis profissionais, reconhecendo suas conquistas educacionais.",
    },
    {
      question: "Posso fazer reembolso se não gostar do curso?",
      answer:
        "Oferecemos uma garantia de 30 dias de devolução do dinheiro. Se você não estiver satisfeito com o curso nos primeiros 30 dias, entre em contato com nosso suporte e processaremos um reembolso completo, sem perguntas.",
    },
    {
      question: "Como posso entrar em contato com o instrutor?",
      answer:
        "Cada curso possui um fórum de discussão onde você pode fazer perguntas e interagir com o instrutor e outros alunos. Os instrutores geralmente respondem dentro de 24-48 horas. Você também pode enviar mensagens diretas através da plataforma.",
    },
    {
      question: "Há algum pré-requisito para os cursos?",
      answer:
        "Cada curso lista seus pré-requisitos na página de descrição. Alguns cursos são para iniciantes e não requerem conhecimento prévio, enquanto outros podem exigir experiência em áreas específicas. Recomendamos ler a descrição completa do curso antes de se inscrever.",
    },
    {
      question: "Posso baixar os materiais do curso para assistir offline?",
      answer:
        "Sim! Você pode baixar as aulas em vídeo, notas de aula e materiais complementares para assistir offline. Isso é útil se você tem conexão de internet limitada ou deseja revisar o conteúdo sem estar conectado.",
    },
    {
      question: "Como funciona o programa de instrutores?",
      answer:
        "Se você é um educador certificado e deseja compartilhar seus conhecimentos, oferecemos um programa de instrutores. Você pode criar e vender seus próprios cursos em nossa plataforma. Entre em contato conosco para mais informações sobre como se tornar um instrutor.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos cursos, inscrições e certificados.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === 0}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-4">
              Não encontrou a resposta que procurava? Entre em contato com nosso time de suporte.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Contate o Suporte
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
