import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../SubComponent/SectionTitle';
import useAppContext from '../../Hooks/useAppContext';
import usePublicApi from '../../Hooks/usePublicApi';

const ProfileDetails = () => {
  const { user } = useAppContext();
  const publicApi = usePublicApi();

  const { data: clientData = [] } = useQuery({
    queryKey: [user?.email, 'client'],
    queryFn: async () => {
      const response = await publicApi.get(`/users/per/${user.email}`);
      return response.data;
    },
  });

  const { occupation, email, username, displayName } = clientData;

  return (
    <div>
      <SectionTitle
        heading="User information"
        subHeading="your provided information"
      />

      <div>
        {occupation && (
          <h1 className="text-2xl font-lora tracking-widest">
            Occupation : <span className="font-semibold">{occupation}</span>
          </h1>
        )}
        <h1 className="text-2xl font-lora tracking-widest">
          Your logged in email is :{' '}
          <span className="font-semibold">{email}</span>
        </h1>
        <h1 className="text-2xl font-lora tracking-widest">
          Your Username :{' '}
          <span className="font-semibold">{username || displayName}</span>
        </h1>
      </div>
    </div>
  );
};

export default ProfileDetails;
