import { Profile } from './1_task_components/Profile';
import { Statistics } from './2_task_components/Statistics';
import { FriendsList } from './3_task_components/FriendList';
import { TransactionHistory } from './4_task_components/TransactionHistory';
import profile from 'user.json';
import stats from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        imgUrl={profile.avatar}
        name={profile.username}
        tag={profile.tag}
        location={profile.location}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
