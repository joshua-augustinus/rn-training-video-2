let fakeDataArray = [];
for (let i = 0; i < 100; i++) {
    fakeDataArray.push({ id: i });
}

export const getFakeData = () => {
    return fakeDataArray;
}
