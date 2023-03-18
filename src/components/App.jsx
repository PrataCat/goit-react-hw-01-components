import Profile from './profile/Profile';
import user from '../patch/user.json';
import Statistics from './Statistics/Statistics';
import data from '../patch/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../patch/friends.json';
import TransactionHistory from './Transactions/TransactionHistory';
import items from '../patch/transactions.json';

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
      <h1>Friend List</h1>
      <FriendList friends={friends} />
      <h1>Transaction History</h1>
      <TransactionHistory items={items} />
    </div>
  );
};
