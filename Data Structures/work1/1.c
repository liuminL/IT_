#include<stdio.h>
int main(){
	int k,fg = 0;
	scanf("%d", &k);
	int a[k];
	int max = a[0];
	for (int i = 0; i < k; ++i)
	{
		scanf("%d", &a[i]);
	}

	for (int i = 0; i < k; ++i)
	{
		if(a[i] > 0)
			fg = 1;
	}



	if (fg)
	{
		printf("%d", 0);;
	}
	else
	{
		for (int i = 0; i < k; ++i)
		{
			for (int j = 1; j <= k - i; ++j)
			{	
				int sum = 0;
				for (int t = 0; t < j; ++t)
				{
					sum += a[j];
				}
				if(a[j]>max)
					max = a[j];
			}
		}
	}

	printf("%d", max);
	return 0;
}