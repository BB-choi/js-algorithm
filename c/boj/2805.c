// 이분탐색, 매개변수 탐색
#include <stdio.h>

int main(void)
{
    int count, meter;
    int trees[1000001];
	int max = 0;
    scanf("%d %d", &count, &meter);

    for (int i = 0; i < count; i++)
    {
        scanf("%d", &trees[i]);
	if (trees[i] > max)
	{
		max = trees[i];
	}
    }
    /* // 나무 높이 배열의 오름차순 정렬은 필요하지 않음
    int temp;
    for (int i = 0; i < count; i++)
    {
        for (int j = 0; j < count - 1 - i; j++)
        {
            if (trees[j] > trees[j + 1])
            {
                temp = trees[j];
                trees[j] = trees[j + 1];
                trees[j + 1] = temp;
            }
        }
    } */
	// 이진탐색으로 절단기 높이 찾기
    
    // 시작 : 무조건 나무를 가져갈 수 있다.
    int start = 0;
    // 끝 : 무조건 나무를 가져갈 수 없다.
    int end = max;
    int mid;
	long long result = 0;
	int cutter = 0;
    while (start <= end)
    {
    	mid = (start + end) / 2;
	    result = 0;
        for (int i = 0; i < count; i++)
        {
            if (trees[i] > mid)
            {
                result += (trees[i] - mid);
            }
        }
        
        if (result >= meter &&  mid > cutter)
        {
            cutter = mid;
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
	
    }
	printf("%d", cutter);
}

// References
// https://movefast.tistory.com/311
// https://kosaf04pyh.tistory.com/95
// https://under-desk.tistory.com/5
// https://icanyoucanwecan.tistory.com/122