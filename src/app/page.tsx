import { FileUploadForm } from 'components/fileUploadForm/FileUploadForm';
import { Heading, Section } from 'theme/components';

export default function Home() {
  return (
    <Section>
      <Headline />
      <FileUploadForm />
    </Section>
  );
}

const Headline = () => {
  return (
    <Heading
      sx={{
        variant: 'text.primary-135-mixed',
        gridColumn: ['1/13', '1/25', '1/25', '1/25'],
        fontSize: ['3rem', '3rem', '3rem', '4rem']
      }}>
      Invoice to json converter
    </Heading>
  );
};
