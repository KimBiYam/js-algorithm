function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let inBridgeTrucks = [];
  let inBridgeTrucksTimes = [];

  while (true) {
    let inBridgeTruckWeights = 0;

    inBridgeTrucksTimes.forEach((e, index) => {
      inBridgeTrucksTimes[index]++;
    });

    inBridgeTrucksTimes.forEach((e, index) => {
      if (e === bridge_length) {
        inBridgeTrucksTimes.splice(index, 1);
        inBridgeTrucks.splice(index, 1);
      }
    });

    inBridgeTrucks.forEach((e) => {
      inBridgeTruckWeights += e;
    });

    if (inBridgeTruckWeights + truck_weights[0] <= weight) {
      inBridgeTrucks.push(truck_weights[0]);
      inBridgeTrucksTimes.push(0);
      truck_weights.splice(0, 1);
    }

    answer++;

    if (inBridgeTrucks.length === 0) {
      break;
    }
  }

  return answer;
}
