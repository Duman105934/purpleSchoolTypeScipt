// moi variant

// async function getFaqs(req): Promise<{
// 	question: string;
// 	answer: string,
// 	tags: string[],
// 	likes: number,
// 	status: string > {
//   const res = await fetch('/faqs', {
//     method: 'POST',
//     body: JSON.stringify(req),
//   });
//   const data = await res.json();
//   return data;
// }

// pravilny variant

enum QuestionStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted',
}

async function getFaqs(req: {
  // zapros
  topicId: number;
  status?: QuestionStatus; // optional - mozhet byt mozhet i ne byt
}): Promise<
  {
    // otvet
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
  }[]
> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}
