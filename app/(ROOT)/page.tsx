import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

import React from 'react'

const home = () => {
    const loggedIn = {firstname:"Ayush" , lastname:"Suryesh" , email:"aayushsuryesh14@gmail.com"};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstname || "Guest"}
                subtext="Access, manage and track your finances efficiently"
                />

                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={10000.75}
                />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:10000.75},{currentBalance:10000.75}]}
        />
    </section>
  )
}

export default home