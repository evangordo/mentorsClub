import { getMentor } from '@/app/lib/data';
import React from 'react';

interface SingleMentorPageProps {
  params: {
    id: string;
  };
}

const SinglePostPage = async ({ params }: SingleMentorPageProps) => {
  const { id } = params;

  try {
    const mentor = await getMentor(id);
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
  } catch (error) {
    console.log(error);
    return <div>Failed to fetch mentor</div>;
  }
};

export default SinglePostPage;
