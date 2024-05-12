import  { useState, useEffect } from 'react';
import * as React from 'react';
import { SharePointService } from '../../service/RetriveListItems';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';

export default function NewIdea(props:any) {
  const [categoryItems, setCategoryItems] = useState<any[]>([]);
  const {context} = props;
  const [chosenCategory,setChosenCategory] = React.useState<any>();
  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        const sharePointService = new SharePointService(context);
        const items = await sharePointService._getListItems("Categories");
        setCategoryItems(items);
      } catch (error) {
        console.error('Error fetching category items:', error);
      }
    };

    fetchCategoryItems();
  }, [context]);

  const handleChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    if (option) {
      const categoryId = option.key.toString();
        setChosenCategory(categoryId)

    }
  };

  // Convert groups to dropdown options
  const dropdownOptions: IDropdownOption[] = categoryItems.map(
    (category: any) => ({
      key: category.Id,
      text: category.Title
      
    })
  );
  return (
    <div>
      <h2>Category Items</h2>
      <Dropdown
          placeholder={"Select a group"}
          options={dropdownOptions}
          onChange={handleChange}
          styles={{ dropdown: { width: 300, marginTop: "5px" } }} 
        />

    </div>
  );
}
