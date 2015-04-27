#include <stdio.h>
#include <stdlib.h>

#define FROMFILE 1//this micro determines how to input the data

typedef struct node
{   char data;
    struct node *lchild,*rchild;
}JD;


void inorder(JD *bt)
{  if(bt!=NULL)
   {  inorder(bt->lchild);
      printf("%c\t",bt->data);
      inorder(bt->rchild);
   }
}


/////////////create the tree
JD *insertbst(JD *r,char x)
{  JD *p,*q,*s;
   s=(JD *)malloc(sizeof(JD));
   s->data=x;  s->lchild=s->rchild=NULL;
   q=NULL;
   if(r==NULL) {  r=s; return(r);}
   p=r;
   while(p!=NULL)
   {  q=p;
      if(x<p->data)
         p=p->lchild;
      else
         p=p->rchild;
   }
   if(x<q->data)
      q->lchild=s;
   else
      q->rchild=s;
   return(r);
}

JD *insertbst_file(JD *r)
{
	FILE* fp;
	char ch;
	fp = fopen("d:\\data1.txt","r");
	if(!fp)
	{
		printf("the file does not exist!\n");
		return 0;
	}
	while(fscanf(fp,"%c",&ch)!=EOF)
		r=insertbst(r,ch);
	return r;
}
int main()
{  
	JD *head=NULL;
#ifdef FROMFILE
	head = insertbst_file(head);
#else
	char ch;
	printf("pls input the data:");
	scanf("%c",&ch);
	while(ch!=' ')
	{
		head=insertbst(head,ch);
		scanf("%c",&ch);
	}
#endif
	
   printf("\n the inorder is:\n");
   inorder(head);
   
}
