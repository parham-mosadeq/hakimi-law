import { phoneOne, phoneTwo } from '../../../../data/contactDetails';
import { ConvertToFarsiNumbers } from '../../../../lib/lib';

export default function ContactUsPhones({ txtColor }) {
  return (
    <>
      <a
        href={`tel:${phoneOne}`}
        className={`${txtColor}   block tracking-wider`}
      >
        {' '}
        {ConvertToFarsiNumbers(+phoneOne)}{' '}
      </a>
      <a
        href={`tel:${phoneTwo}`}
        className={`${txtColor}  block tracking-wider`}
      >
        {' '}
        {ConvertToFarsiNumbers(phoneTwo)}{' '}
      </a>
    </>
  );
}
