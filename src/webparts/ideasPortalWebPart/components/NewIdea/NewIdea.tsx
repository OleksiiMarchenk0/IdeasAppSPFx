import  { useState, useEffect } from 'react';
import * as React from 'react';
import { SharePointService } from '../../service/RetriveListItems';

export default function NewIdea(props:any) {
  const [categoryItems, setCategoryItems] = useState<any[]>([]);
  const {context} = props;
  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        const sharePointService = new SharePointService(context);
        const items = await sharePointService._getCategoryItems();
        setCategoryItems(items);
      } catch (error) {
        console.error('Error fetching category items:', error);
      }
    };

    fetchCategoryItems();
  }, [context]);

  return (
    <div>
      <h2>Category Items</h2>
      <ul>
        {categoryItems.map((item, index) => (
          <li key={index}>{item.Title}</li>
        ))}
      </ul>
    </div>
  );
}
