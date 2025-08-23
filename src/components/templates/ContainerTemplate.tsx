import type { IContainerTemplateProps } from "./ContainerTemplate.types";

export default function ContainerTemplate({
  header,
  list,
  form,
}: IContainerTemplateProps) {
  return (
    <div className="w-[450px] max-w-full m-auto h-screen md:py-6 py-4 px-4">
      <div className="border border-gray-200 p-6 rounded-2xl h-full">
        {header && <div className="h-[50px]">{header}</div>}
        {list && <div className="h-[calc(100%-133px)]">{list}</div>}
        {form && (
          <>
            <div className="h-[1px] bg-gray-200 my-[20px]"></div>
            <div className="h-[42px]">{form}</div>
          </>
        )}
      </div>
    </div>
  );
}
