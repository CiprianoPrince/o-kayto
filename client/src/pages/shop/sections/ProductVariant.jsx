import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import colorNames from 'colornames';
import { useForm } from 'react-hook-form';
const ENDPOINT = 'http://localhost:8000';
const STORAGEPATH = 'storage/uploads/images';

const ProductVariant = ({ variants, selectedVariant, setCurrentVariant }) => {
    const { register, handleSubmit, formState, watch, setValue } = useForm({
        defaultValues: {
            colorID: selectedVariant.Color.colorID,
            quantity: 1,
            sizeID: selectedVariant.Size.sizeID,
        },
    });

    const { errors } = formState;

    const quantity = watch('quantity', 1);

    const onSubmit = (formData) => {
        if (errors.length) return;
        console.log(formData);
    };

    const handleDecrement = () => {
        setValue('quantity', Math.max(Number(quantity) - 1, 1));
    };

    const handleIncrement = () => {
        setValue('quantity', Number(quantity) + 1);
    };
    return (
        <>
            <div className="border md:basis-6/12">
                <img
                    src={`${ENDPOINT}/${STORAGEPATH}/variants/${selectedVariant.Variant.VariantImage.imagePath}`}
                    alt={selectedVariant.Variant.VariantImage.altText}
                />
            </div>

            <form
                className=" basis-12/12 space-y-4 divide-y md:basis-6/12 md:self-start"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-2">
                    <h1 className="header-3 font-palanquin font-bold">Product title</h1>
                    <span>star star star</span>
                    <span className="font-montserrat text-xl font-bold text-secondary-600">
                        &#8369;1000
                    </span>
                </div>

                <div className="flex flex-row gap-2 py-4">
                    <div className="flex-1 space-y-2">
                        <p className="font-medium">Available Size</p>
                        <div className="space-x-2">
                            {variants.map(({ variantID, Size }) => (
                                <div className="relative inline" key={variantID}>
                                    <input
                                        className="button |  cursor-pointer appearance-none bg-primary-100 p-4 checked:bg-accent-500"
                                        type="radio"
                                        value={Size.sizeID}
                                        checked={Size.sizeID === selectedVariant.Size.sizeID}
                                        {...register('sizeID')}
                                    />
                                    <span className="top-50 left-50 absolute translate-x-[50%] translate-y-[50%]">
                                        {Size?.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 space-y-2">
                        <p className="font-medium">Available Color</p>
                        <div className=" space-x-2">
                            {variants.map(({ variantID, Color }, i) => (
                                <input
                                    key={variantID}
                                    className="button | cursor-pointer appearance-none rounded-full bg-primary-100 p-4 checked:ring-2 checked:ring-transparent"
                                    type="radio"
                                    style={{ backgroundColor: `${colorNames(Color.name)}` }}
                                    value={Color.colorID}
                                    checked={Color.colorID === selectedVariant.Color.colorID}
                                    {...register('colorID')}
                                    onClick={() => setCurrentVariant(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-start py-4">
                    <div className="input-group |group flex max-w-[10rem] justify-center">
                        <span
                            className="input-group-text | group bg-transparent hover:bg-accent-500"
                            tabIndex="0"
                            onClick={handleDecrement}
                        >
                            <MinusIcon
                                className="h-6 w-6 text-accent-500 group-hover:text-primary-50"
                                role="button"
                            />
                        </span>

                        <input
                            className="form-control | peer w-full max-w-[3.5rem] text-center focus:ring-accent-500"
                            type="number"
                            {...register('quantity')}
                        />

                        <span
                            className="input-group-text | group bg-transparent hover:bg-accent-500"
                            tabIndex="0"
                            onClick={handleIncrement}
                        >
                            <PlusIcon
                                className="h-6 w-6 text-accent-500 group-hover:text-primary-50"
                                role="button"
                            />
                        </span>
                    </div>

                    <button className="button" type="submit">
                        Add to cart
                    </button>
                </div>
            </form>
        </>
    );
};

export default ProductVariant;
