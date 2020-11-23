export type Ticket = {
  id: string;
  properties: {
    subject: string;
    content: string;
  };
  stage: {
    label: string;
  };
};
