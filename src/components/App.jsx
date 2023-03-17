import Profile from './profile/Profile';
import user from '../patch/user.json';
import Statistics from './statistics/Statistics';
import data from '../patch/data.json';

export const App = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>Statistics</h1>
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
