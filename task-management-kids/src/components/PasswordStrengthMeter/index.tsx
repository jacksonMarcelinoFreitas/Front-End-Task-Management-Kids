import { Container } from './style';
import zxcvbn from 'zxcvbn';

interface InputProps {
  password: string;
}

export function PasswordStrengthMeter({ password }: InputProps) {
  const testedResult = zxcvbn(password);

  const createPasswordLabel = () => {
    switch (testedResult.score) {
      case 0:
        return 'Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Weak';
    }
  }

  return (
    password&&
    <Container className="password-strength-meter">
      <progress
        className={`password-strength-meter-progress strength-${createPasswordLabel()}`}
        value={testedResult.score}
        max="4"
      />
      <strong>{createPasswordLabel()}</strong>
    </Container>
  );
}
