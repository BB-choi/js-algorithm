// 버블정렬
// https://thrillfighter.tistory.com/209

// nC2 -> n! / 2! * (n - 2)!
// Landau's theorem : tournament graph
// https://velog.io/@deepen/13560-%EC%B6%95%EA%B5%AC-%EA%B2%8C%EC%9E%84
// https://travelbeeee.tistory.com/14
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jh05013&logNo=221001524338

#include <stdio.h>

int main(void)
{
    int team = 0;
    int lst[10000] = {0, };
    int sum = 0, temp = 0;
    scanf("%d", &team);
    for (int i = 0; i < team; i++)
    {
        scanf("%d", &lst[i]);
    }
    for (int i = 0; i < team - 1; i++)
    {
        for(int j = 0; j < team - 1 - i; j++)
        {
            if (lst[j] > lst[j + 1])
            {
                temp = lst[j];
                lst[j] = lst[j + 1];
                lst [j + 1] = temp;
            }
        }
    }
    // 정렬 여부 확인
    /* for (int i = 0; i < team; i++)
    {
        printf("%d\n", lst[i]);
    } */
    for (int i = 0; i < team; i++)
    {
        sum += lst[i];
        if (sum < ((i + 1) * i) / 2)
        {
            printf("-1");
            return 0;
        }
    }
    if (sum == ((team * (team - 1)) / 2))
    {
        printf("1");
    }
    else
    {
        printf("-1");
    }
    return 0;
}