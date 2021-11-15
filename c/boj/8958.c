#include <stdio.h>
#include <string.h>

int main(void)
{
    int input;
    int count = 1;
    int score = 0;
    char str[81];
    scanf("%d", &input);

    for(int i = 0; i < input; i++)
    {
        score = 0;
        count = 1;
        scanf("%s", str);
        for (int j = 0; j < strlen(str); j++)
        {
            if (str[j] == 'O')
            {
                score += count;
                count++;
            }
            else
            {
                count = 1;
            }
        }
        printf("%d\n", score);
    }
    return (0);
}