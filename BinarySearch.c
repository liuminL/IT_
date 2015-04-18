int BinarySearch(StaticTable *Tbl, ElementType K)
{
	int left, right, mid, NoFound = -1;

	left = 1;
	right = Tb1->Length;
	while (left <= right)
	{
		mid = (left + right) / 2;
		if(K < Tb1->Elementype[mid]) right = mid -1; //modify the right 
		else if(K > Tb1 -> Elementype[mid]) left = mid + 1;// modify the left
		else return mid;
	}
	return NoFound; // don't have found it
}