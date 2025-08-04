import { Header, StatsCard, TripCard } from "~/components";

import { dashboardStats, user, allTrips } from "~/constants";
const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } =
  dashboardStats;
function Dasboard() {
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Welcome to your dashboard, where you can manage your travel plans and bookings."
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-col-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonth={usersJoined.currentMonth}
            lastMonth={usersJoined.previousMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonth={userRole.currentMonth}
            lastMonth={userRole.previousMonth}
          />
          <StatsCard
            headerTitle="Active Users Today"
            total={userRole.total}
            currentMonth={usersJoined.currentMonth}
            lastMonth={usersJoined.previousMonth}
          />
        </div>
      </section>
      <section className="containere">
        <h1 className="text-xl font-semibold text-dark-100"> Trips </h1>
        <div className="trip-grid">
          {allTrips
            .slice(0, 4)
            .map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
              <TripCard  key={id} id={id.toString()} name={name} imageUrl={imageUrls[0]} location={itinerary?.[0]?.location ?? ""} tags={tags} price={estimatedPrice}/>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Dasboard;
