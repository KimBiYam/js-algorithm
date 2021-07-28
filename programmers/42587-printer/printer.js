function solution(priorities, location) {
  let counter = 0;
  const printItems = priorities.map((priority, index) => {
    if (index === location) {
      return { priority, isFindItem: true };
    }

    return { priority, isFindItem: false };
  });

  while (printItems.length > 0) {
    const currentItem = printItems.shift();
    if (
      printItems.some((printItem) => printItem.priority > currentItem.priority)
    ) {
      printItems.push(currentItem);
    } else {
      counter++;
      if (currentItem.isFindItem) {
        return counter;
      }
    }
  }
}
