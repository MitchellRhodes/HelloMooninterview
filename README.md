# HelloMooninterview

## Backend: 
Cd to hello-moon-backend directory
In a new terminal in same directory run `docker-compose up` to start db
Run `npm i`
Run `npm run create:db`
Run `npm run seed:db` to create a base portfolio
Run `npm run dev` to start backend server

## Frontend:
    1) at top level directory `run npm i`
    2) run `npm run dev` to start frontend


### Approach:
Create an express based backend that could keep track of a user’s portfolio and the transactions that occur within the portfolio
This includes a portfolio object with the corresponding coins that the app can trade for
Bitcoin
Solana
Ethereum
Dogecoin
The frontend can get and put on the portfolio object to update balance values based on the input for buy and sell coins based on calls to the backend
The frontend also displays the portfolio of a user in a pie chart
The app was meant to record transactions of each sell and buy in order to show the user their portfolio performance over time
 Due to time constraints this feature wasn’t able to be implemented
CoinMarketCap was used as the source for fetching the coin data, an api key was created on their website in order to interact and query the data

#### Challenges
Ran into issues updating portfolio pie chart based on buying and selling of coins
Understanding constraints of the project as some of the information was a bit general. So, assumptions were made to mock behavior for buy and sell. 
Ran out of time to implement timeline of user portfolio balances. 
Challenges upon start up were searching for apis to use and learning what routes I needed. 



#### What I would have done differently
I would have not made the top level page a server component so I could update the pie chart with a useEffect when the button components were used to buy and sell. I did not think ahead enough on that.
Setting up project so the frontend modules were at a top level directory instead of a folder.
Used Zod parsing or more interfaces for database queries.


#### Future features
User auth for front end to back end
Implementing the track and display over time. I began this with the transactions table in mind to use for that, but ran out of time.
