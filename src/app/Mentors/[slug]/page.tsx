import { getMentor } from '@/app/lib/data';
import React from 'react';


interface SingleMentorPageProps {
  params: {
    slug: string;
  };
}

const SinglePostPage = async ({ params }: SingleMentorPageProps) => {
  const { slug } = params;

  const mentor = await getMentor(slug);
  console.log("singleMentor", mentor);

  if (!mentor) {
    return <div>Mentor not found</div>;
  }

  return (
    <>
      <h1>{mentor.lastName}</h1>
      <h1>{mentor.firstName}</h1>
      <h1>{mentor.career}</h1>
      <h1>{mentor.industry}</h1>
      <h1>{mentor.desc}</h1>
      <h1>{mentor.title}</h1>
      <h1>{mentor.about}</h1>
    </>
  );
};

export default SinglePostPage;
