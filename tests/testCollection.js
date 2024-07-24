export const testCollection = [
    {
        testName: 'Top Row Win',
        ticketNumbers: [
            [4, 16, null, null, 48, null, 63, 76, null],
            [7, null, 23, 38, null, 52, null, null, 80],
            [9, null, 25, null, null, 56, 64, null, 83]
        ],
        announcedNumbers: [90, 4, 46, 63, 89, 16, 76, 48],
        claim: 'Top Row',
        expectedResult: 'Accepted'   // 'Accepted' or 'Rejected'
    },
    {
        testName: 'Top Row Win Denied Due to Late Claim',
        ticketNumbers: [
            [4, 16, null, null, 48, null, 63, 76, null],
            [7, null, 23, 38, null, 52, null, null, 80],
            [9, null, 25, null, null, 56, 64, null, 83]
        ],
        announcedNumbers: [90, 4, 46, 63, 89, 16, 76, 48, 12],
        claim: 'Top Row',
        expectedResult: 'Rejected'
    }
]