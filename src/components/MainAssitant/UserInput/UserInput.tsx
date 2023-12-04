import './UserInput.css';
const UserInput = ({ question }: { question: string }): JSX.Element => {
  return (
    <div className='box-input'>
      <img className='avatarRole' src='../../../../icons/icon-user.png' alt='avatar user' />
      <div className='text-message'>{question}</div>
    </div>
  );
};

export default UserInput;
