import { Html, Heading, Text } from "@react-email/components"
const EmailTemplate = ({
  name,
  email,

}: {
  name: string
  email: string
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">Welcome to the Club!</Heading>
      <Text>You have just joined the Mentors club!</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
    
    </Html>
  )
}
export default EmailTemplate