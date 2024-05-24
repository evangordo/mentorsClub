import * as React from 'react';
import { Html, Button } from "@react-email/components";

import { Heading } from "@react-email/components";





interface WelcomeEmailProps {
firstName: string
}

export function Email({firstName}: WelcomeEmailProps) {


  return (
    <Html lang="en">
      <Button>Click me</Button>
      <Heading>
 My email {firstName}
    </Heading>
    </Html>
  );
}

export default Email;
