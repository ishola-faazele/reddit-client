import { FaShare } from 'react-icons/fa';

const ShareButton = ({urlToCopy}: {urlToCopy: string}) => {
  const handleShareClick = () => {
    navigator.clipboard.writeText(urlToCopy)
      .then(() => alert('Link copied to clipboard'))
      .catch((error) => console.error('Failed to copy link: ', error));
  };

  return (
    <div>
      <FaShare onClick={handleShareClick} className='cursor-pointer hover:text-blue-400'/>
    </div>
  );
};

export default ShareButton;
