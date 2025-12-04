import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { theme } from "@/utils/themeSettings";
import { ThemeProvider } from '@mui/material/styles';
export default function RegularProcess({ title, description, cards }) {
  if (!cards) return null;

  const stepCards = cards.map((item, index) => {
    return (
      <div className="step-wrapper" key={index}>
        <div className="title">
          <div className="step-title-number-wrapper">
            <div className="step-number">{index + 1}</div>
            <Typography
              variant="h5"
              component="h3"
              color="var(--dark-on-secondary-container)"
            >
              {item.title}
            </Typography>
          </div>
          <div className="border"></div>
        </div>
        <div className="content">
          <Typography
            variant="body1"
            component="div"
            className="description"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></Typography>
        </div>
      </div>
    );
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Container maxWidth="lg" className="container">
          <div className="title-wrapper">
            <Typography variant="h2" component="h2" className="title">
              {title}
            </Typography>
            <div
              className="description body1"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <div className="steps-wrapper">{stepCards}</div>
        </Container>
      </Section>
    </ThemeProvider>
  );
}
const Section = styled.section`
  padding: 40px 0;
  overflow: hidden !important;
  background: var(--light-secondary-container);
  .title-wrapper {
    display: grid;
    grid-template-columns: auto 600px;
    gap: 40px;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .title{ 
      font-size: 2rem; 
    }
    .description {
      font-size: 1.4rem !important;
      color: var(--dark-on-surface-variant);
      p,
      strong {
        font-size: 1.2rem !important;
        color: var(--dark-on-surface-variant);
      }
      @media (max-width: 900px) {
        font-size: 1rem !important;
        p {
          font-size: 1rem !important;
        }
      }
    }
  }
  .steps-wrapper {
    .step-wrapper {
      margin: 80px 0;
      display: grid;
      gap: 40px;
      grid-template-columns: auto 600px;
      @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        gap: 16px;
        margin: 32px 0 56px 0;
      }
      align-items: end;
      .title {
        .step-title-number-wrapper {
          display: grid;
          grid-template-columns: 40px auto;
          align-items: center;
          gap: 16px;
          h3{ 
              color: var(--dark-on-surface-variant);
              font-weight: 700;
              text-transform: uppercase;
            }
          .step-number {
            background: var(--dark-on-surface);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: var(--dark-on-secondary-container);
          }
        }
      }
      .border {
        margin-top: 24px;
        border-top: 2px solid var(--dark-secondary-container);
        height: 1px;
        @media (max-width: 600px) {
          margin-top: 16px;
        }
      }
    }
    .content {
      color: var(--white);
      .description {
         h4{ 
            color: white; 
            font-size: 1.6rem;
          }
        p {
     color: var(--dark-on-surface-variant);
            font-size: 1.2rem;
            font-weight: 400 !important;
            line-height: 1.5rem;
            margin-top: 8px;
        }
            ul{ 
            position: relative; 
            margin-top: 24px; 
            margin-left: 32px; 
            li{ 
              position: relative; 
              p{ 
                font-size: 1.2rem; 
              }
            }
          li::before {
          content: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.1202 0C18.0402 0 0.120178 17.92 0.120178 40C0.120178 62.08 18.0402 80 40.1202 80C62.2002 80 80.1202 62.08 80.1202 40C80.1202 17.92 62.2002 0 40.1202 0ZM40.1202 72C22.4802 72 8.12018 57.64 8.12018 40C8.12018 22.36 22.4802 8 40.1202 8C57.7602 8 72.1202 22.36 72.1202 40C72.1202 57.64 57.7602 72 40.1202 72ZM58.4802 22.32L32.1202 48.68L21.7602 38.36L16.1202 44L32.1202 60L64.1202 28L58.4802 22.32Z" fill="%23ffffff"/></svg>'); 
            position: absolute;
            top: 2px;
            left: -28px;
          }
          }
      }
    }
    h2 {
    }
  }
`;
