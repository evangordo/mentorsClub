import SingleMentorPage from '@/app/components/SingleMentorPage'
import { getMentor } from '@/app/lib/data'
import React, { Suspense } from 'react'
import Loading from './loading'

interface SingleMentorPageProps {
  params: {
    id: string
  }
}

const SinglePostPage = async ({ params }: SingleMentorPageProps) => {
  const { id } = params

  try {
    const mentor = await getMentor(id)

    if (!mentor) {
      return <div>Mentor not found</div>
    }

    return (
      <>
        <Suspense fallback={<Loading />}>
          <SingleMentorPage
            firstName={mentor.firstName}
            lastName={mentor.lastName}
            img={mentor.img}
            industry={mentor.industry}
            career={mentor.career}
            about={mentor.about}
            mentoringTopics={mentor.mentoringTopics}
          />
        </Suspense>
      </>
    )
  } catch (error) {
    console.log(error)
    return <div>Failed to fetch mentor</div>
  }
}

export default SinglePostPage
