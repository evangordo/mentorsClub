import SingleMentorPage from '@/app/components/SingleMentorPage';
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
    <SingleMentorPage firstName={mentor.firstName}

    career={mentor.career} about={mentor.about} mentoringTopics={mentor.mentoringTopics}/>
      </>
    );
  } catch (error) {
    console.log(error);
    return <div>Failed to fetch mentor</div>;
  }
};

export default SinglePostPage;


