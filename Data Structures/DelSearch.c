JD *delnode(JD *r,JD *p,JD *f)//r二叉树，p欲删除节点，f-p的双亲节点
{  JD *q,*s;//s需要拿上来的节点
   int flag=0;
   if(p->lchild==NULL)  s=p->rchild;//只有左（右）子树
   else if(p->rchild==NULL)  s=p->lchild;
   else{  q=p;
          s=p->lchild;
          while(s->rchild!=NULL)
          {  q=s;
             s=s->rchild;
          }
          if(q==p)  q->lchild=s->lchild;//情形6，C无右子树
          else      q->rchild=s->lchild;
          p->data=s->data;
          free(s);
          flag=1;
       }
   if(flag==0)
   {  if(f==NULL)  r=s;//根节点
      else if(f->lchild==p)  f->lchild=s;
      else   f->rchild=s;
      free(p);
   }
   return(r);
}