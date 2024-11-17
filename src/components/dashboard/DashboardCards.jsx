import React from 'react';
import * as Icons from 'iconsax-react';
import WalletCard from './WalletCard';
import ActionCard from './ActionCard';
import { dashboardCards } from '../../data/dashboardData';

const DashboardCards = ({ theme }) => {
    return (
        <div className="row g-3 mx-0">
            {dashboardCards.map((card, index) => {
                const Icon = Icons[card.iconName];
                
                return (
                    <div key={index} className={`${card.colSize} px-2`}>
                        {card.type === 'wallet' ? (
                            <WalletCard
                                icon={Icon}
                                value={card.value}
                                label={card.label}
                                theme={theme}
                            />
                        ) : (
                            <ActionCard
                                icon={Icon}
                                label={card.label}
                                theme={theme}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default DashboardCards;